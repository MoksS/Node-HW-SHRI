import fs from "fs";
import path from "path";
import { Response } from "express";

interface CacheInterface {
  dir: string;
  timestamp?: number;
}

class Cache {
  dir: string;

  timestamp: number;

  constructor(obj: CacheInterface) {
    this.timestamp = obj.timestamp || 3600000; // неделя в миллисекундах
    this.dir = path.resolve(__dirname, obj.dir);

    try {
      fs.mkdirSync(this.dir); // это операция выполняеться один раз в момент инцилизации файла apiController,
      // до того, как сервер начнет слушать порт и получать запросы.
    } catch (error) {
      if (error.code === "EEXIST") return;
      console.log(error);
    }
  }

  get(id: string, stream: Response): Promise<boolean> {
    return new Promise((resolve) => {
      const readStream = fs.createReadStream(path.join(this.dir, `${id}.json`));
      stream.set("Content-Type", "application/json");
      readStream.pipe(stream);
      readStream.on("close", () => {
        resolve(true);
      });
      readStream.on("error", () => {
        resolve(false);
      });
    });
  }

  set(id: string, data: string): Promise<boolean> {
    return new Promise((resolve) => {
      fs.writeFile(path.join(this.dir, `${id}.json`), data, (err) => {
        if (err) {
          resolve(false);
        } else {
          return resolve(true);
        }
      });
    });
  }

  async clearCache(): Promise<void> {
    const clear = async (): Promise<void> => {
      const dir = await fs.promises.opendir(this.dir);
      for await (const dirent of dir) {
        const filedir = path.join(this.dir, dirent.name);
        const stat = await fs.promises.stat(filedir);
        if (stat.birthtimeMs + this.timestamp < Date.now()) {
          await fs.promises.unlink(filedir);
        }
      }

      setTimeout(() => setImmediate(clear), 30000);
    };

    setImmediate(clear);
  }
}

export default Cache;
