const logger = require("../index.js");

describe("fluid.logger", () => {
   test("Logs only DEBUG level to the screen", () => {
      console.log = jest.fn();

      logger.log("Test 1");
      logger.info("Test 1");
      logger.debug("Test 1");
      logger.warn("Test 1");
      logger.error("Test 1");
      expect(console.log).toHaveBeenCalledTimes(5);
   });

   test("Logs only INFO level to the screen", () => {
      console.log = jest.fn();

      logger.init("INFO");
      
      logger.log("Test 1");
      logger.info("Test 1");
      logger.debug("Test 1");
      logger.warn("Test 1");
      logger.error("Test 1");
      
      expect(console.log).toHaveBeenCalledTimes(4);
   });

   test("Logs only WARN level to the screen", () => {
      console.log = jest.fn();

      logger.init("WARN");
      
      logger.log("Test 1");
      logger.info("Test 1");
      logger.debug("Test 1");
      logger.warn("Test 1");
      logger.error("Test 1");
      
      expect(console.log).toHaveBeenCalledTimes(3);
   });

   test("Logs only ERROR level to the screen", () => {
      console.log = jest.fn();

      logger.init("ERROR");
      
      logger.log("Test 1");
      logger.info("Test 1");
      logger.debug("Test 1");
      logger.warn("Test 1");
      logger.error("Test 1");
      
      expect(console.log).toHaveBeenCalledTimes(2);
   });
});
