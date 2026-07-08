export abstract class Command {

    readonly createdAt: Date;

    readonly correlationId?: string;

    readonly userId?: string;

    readonly tenantId?: string;

    protected constructor(props?: {
        correlationId?: string;
        userId?: string;
        tenantId?: string;
    }) {

        this.createdAt = new Date();

        this.correlationId = props?.correlationId;

        this.userId = props?.userId;

        this.tenantId = props?.tenantId;
    }

}