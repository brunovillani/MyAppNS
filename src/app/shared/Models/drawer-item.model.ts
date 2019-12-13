export class DrawerItem {
    text: string;
    icon: string;
    link: string;

    constructor(model: DrawerItem | any) {
        this.text = model.text;
        this.icon = model.icon;
        this.link = model.link;
    }
}
