import {
    Request
}
    from "express";


export function CurrentUser(
    req: Request
) {


    return (
        req as any
    ).user;


}