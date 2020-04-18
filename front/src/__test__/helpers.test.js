import {getDate, getDuration} from "../helpers/time";

it("test getDate function", () => {
  const date = getDate("12-09-2019 12:45");
  expect(date).toBe("9 дек, 12:45");
});

it("test getDuration function", () => {
  const duration = getDuration("123422");
  expect(duration).toBe("2 мин 3сек");
})
