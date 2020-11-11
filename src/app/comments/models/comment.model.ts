export class Comment {
    name: string;
    email: string;
    website: string;
    public constructor(init?: Partial<Comment>) {
        Object.assign(this, init);
    }
}