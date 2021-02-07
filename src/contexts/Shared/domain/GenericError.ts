export default class GenericError extends Error {
  private _code: string;

  constructor(code: string, message: string) {
    super(message);
    this._code = code;
  }

  get code(): string {
    return this._code;
  }
}
