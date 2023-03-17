import packageJson from "../../../package.json";
import * as bin from "./index";

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(", ");

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(" ");
};

export const whoami = async (args: string[]): Promise<string> => {
  return "user";
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open("carneyd@dylanface.info");

  return "Opening carneyd@dylanface.info...";
};

export const vim = async (args: string[]): Promise<string> => {
  return `I'm stuck in here... how do I exit?`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  // setTimeout(function () {
  //   window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  // }, 1000);

  return `Permission denied: unable to run the command '${args![0]}' as root.`;
};

export const banner = (args?: string[]): string => {
  return `
██████╗ ██╗   ██╗██╗      █████╗ ███╗   ██╗███████╗ █████╗  ██████╗███████╗
██╔══██╗╚██╗ ██╔╝██║     ██╔══██╗████╗  ██║██╔════╝██╔══██╗██╔════╝██╔════╝
██║  ██║ ╚████╔╝ ██║     ███████║██╔██╗ ██║█████╗  ███████║██║     █████╗  
██║  ██║  ╚██╔╝  ██║     ██╔══██║██║╚██╗██║██╔══╝  ██╔══██║██║     ██╔══╝  
██████╔╝   ██║   ███████╗██║  ██║██║ ╚████║██║     ██║  ██║╚██████╗███████╗
╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝v${packageJson.version}

Type 'help' to see list of available commands.

--
This site is a fork of open-source software!
--
`;
};
