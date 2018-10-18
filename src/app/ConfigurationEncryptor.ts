import { AesUtils } from "./AesUtils";
import { Configuration } from "./configuration";
import { JsonpCallbackContext } from "@angular/common/http/src/jsonp";
import { ConfigurationEncrypted } from "./configuration-encrypted";

export class ConfigurationEncryptor {

    iterationCount = 1000;
    keySize = 128;
    iv = '12345678901234561234567890123456';
    salt = "9876";

    constructor() {
    }

    decrypt(encrypted: ConfigurationEncrypted, passphrase: string): Configuration {
        var aesUtils = new AesUtils(this.keySize, this.iterationCount);
        var json =  aesUtils.decrypt(this.salt, this.iv, passphrase, encrypted.configuration);
        return JSON.parse(json);
    }

    encrypt(configuration: Configuration, passphrase: string): ConfigurationEncrypted {
        var aesUtils = new AesUtils(this.keySize, this.iterationCount);
        var encrypted = aesUtils.encrypt(this.salt, this.iv, passphrase, JSON.stringify(configuration));
        return new ConfigurationEncrypted(configuration.groupLabel, configuration.deviceLabel, encrypted);
    }
}