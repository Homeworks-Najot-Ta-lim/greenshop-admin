import React, { SetStateAction } from "react";

export declare interface TokenContextType{
    token: string | null,
    setToken: React.Dispatch<SetStateAction<string | null>>
}