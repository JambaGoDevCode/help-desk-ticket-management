import { websocketGateway } from "./websocket.gateway";

export class WebsocketEmitter {

  emit(
    event: string,
    payload: any
  ) {

    websocketGateway
      .getServer()
      ?.emit(
        event,
        payload
      );
  }
}

export const websocketEmitter =
  new WebsocketEmitter();