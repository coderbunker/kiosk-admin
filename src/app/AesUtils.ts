import * as CryptoJS from 'crypto-js'

//Cryptojs is not a typescript library and the types are not defined always correctly, all casts to "any" are because of this
export class AesUtils {
keySize;
iterationCount;
constructor(keySize, iterationCount) {
    this.keySize = keySize / 32;
    this.iterationCount = iterationCount;
  };
  
  generateKey(salt, passPhrase) {
    var key = CryptoJS.PBKDF2(
        passPhrase, 
        CryptoJS.enc.Hex.parse(salt),
        { keySize: this.keySize, iterations: this.iterationCount });
    return key;
  }
  
  encrypt(salt, iv, passPhrase, plainText) {
    var key = this.generateKey(salt, passPhrase);
    var encrypted = CryptoJS.AES.encrypt(
        plainText,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });
    return (<any>(encrypted.ciphertext)).toString(CryptoJS.enc.Base64);
  }
  
  decrypt(salt, iv, passPhrase, cipherText) {
    var key = this.generateKey(salt, passPhrase);
    var cipherParams = (<any>(CryptoJS.lib)).CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(cipherText)
    });
    var decrypted = CryptoJS.AES.decrypt(
        cipherParams,
        key,
        { iv: CryptoJS.enc.Hex.parse(iv) });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
}