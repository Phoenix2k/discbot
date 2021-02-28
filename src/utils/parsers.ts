import Discord from 'discord.js';

function parseArgs(args: string[]): string[] {
  // Discard empty entries
  return args.filter((arg) => arg.trim());
}

function parseBody(body: string, prefix: string): string {
  // Remove prefix from the start
  return body.slice(prefix.length);
}

function parseCommand(args: string[]): string {
  // Return the first command
  return (args.shift() || '').toLowerCase();
}

function parseMessage(
  message: Discord.Message,
  prefix: string
): { args: string[]; command: string } {
  const body = parseBody(message.content, prefix);
  const args = parseArgs(body.split(' '));
  const command = parseCommand(args);
  return { args, command };
}

function parseSum(args: string[]): number {
  return args
    .map((s) => (/^([0-9]+)$/.test(s) ? parseFloat(s) : NaN))
    .reduce((counter, n) => (counter += n));
}

export { parseArgs, parseMessage, parseSum };
