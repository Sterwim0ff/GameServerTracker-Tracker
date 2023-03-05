import { ServerType } from "./src/enum";

interface IServer {
    name: string,
    type: ServerType,
    address: string
};

const serverList: IServer[] = [
    {
        name: "Hypixel",
        type: ServerType.Minecraft,
        address: "mc.hypixel.net"
    },
    {
        name: "Minemen",
        type: ServerType.Minecraft,
        address: "eu.minemen.club"
    }
]

export default serverList;