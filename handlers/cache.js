const fs = require("fs");
const path = require("path");

class Cache {
  constructor(dir, timestamp) {
    this.timestamp = timestamp || 604800000; // неделя в миллисекундах
    this.dir = path.resolve(__dirname, dir);
    this.invalid = 0;
  }

  get(id, stream) {
    return new Promise(resolve => {
      const readStream = fs.createReadStream(path.join(this.dir, `${id}.json`));
      stream.set("Content-Type", "application/json");
      readStream.pipe(stream);
      readStream.on("close", () => {
        resolve(true);
      });
      readStream.on("error", err => {
        console.log("Ошибка", err);
        resolve(false);
      });
    });
  }

  set(id, data) {
    return new Promise(resolve => {
      fs.writeFile(path.join(this.dir, `${id}.json`), data, err => {
        if (err) {
          resolve(false);
        } else {
          return resolve(true);
        }
      });
    });
  }

  async clearCache(date) {
    this.invalid = date;

    const clear = async () => {
      const dir = await fs.promises.opendir(this.dir);
      for await (const dirent of dir) {
        const filedir = path.join(this.dir, dirent.name);
        const stat = await fs.promises.stat(filedir);
        if (stat.birthtimeMs + this.timestamp < Date.now()) {
          await fs.promises.unlink(filedir);
        }
      }

      this.invalid += this.timestamp;
      setTimeout(clear, this.invalid - Date.now());
    };

    setTimeout(clear, this.invalid - Date.now());
  }
}

module.exports = {
  Cache
};
