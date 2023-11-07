export interface IInformation {
    navigation: string[];
    home: IHome
}

export interface IHome {
    comment?: string;
    aboutme: IAboutMe;
}

export interface IAboutMe {
    name?: IDictionary;
    rols?: IDictionary;
}

export interface IDictionary {
    code: string;
    value: any
}