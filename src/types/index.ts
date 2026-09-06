export interface Reading {
    distance :number;
    timestamp: number;
    sessionId : string;
}

export interface PostureStatus{
    status : 'good' | 'warning' | 'danger';
    distance : number;
    message : string;
}

export interface Settings{
    warningDistance : number;
    dangerDistance : number;
    alertEnabled: boolean;
    alertIntervalSeconds: number;
    soundEnabled: boolean;
    language: 'ko' | 'en';
}