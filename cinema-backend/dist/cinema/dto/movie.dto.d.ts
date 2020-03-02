export declare class movie_add_dto {
    readonly title: string;
    readonly director: string;
    readonly cast: number;
    readonly description: string;
    readonly duration_min: number;
    readonly isStart: boolean;
    readonly status: boolean;
}
export declare class movie_update_dto {
    readonly id: string;
    readonly title: string;
    readonly director: string;
    readonly cast: number;
    readonly description: string;
    readonly duration_min: number;
    readonly isStart: boolean;
    readonly status: boolean;
}
export declare class movie_delete_dto {
    readonly id: string;
}
