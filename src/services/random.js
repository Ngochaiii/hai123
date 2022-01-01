const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
export const rand = {
    /**
   * Random string with length
   * @param {Number} length
   * @param {String} init
   */
    string (length = 16, init = '') {
        let result = init
        for (let i = 0; i < length; i += 1) {
            result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  },
  /**
   * Random a number between 'from' and 'to'
   * @param {Number} from
   * @param {Number} to
   */
  number (from = 1, to = 100) {
    return Math.floor(Math.random() * to) + from
  }
}