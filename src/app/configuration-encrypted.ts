export class ConfigurationEncrypted {

    groupLabel: string;
    deviceLabel: string;
    configuration: string;
    constructor(groupLabel?: string, deviceLabel?: string, configuration?: string) {
        this.groupLabel = groupLabel;
        this.deviceLabel = deviceLabel;
        this.configuration = configuration;
    }
}