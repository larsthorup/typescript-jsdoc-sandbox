import * as assert from "assert";
import { Player } from "typed-lib";

const player = new Player();
const concert = player.playFrom(["time", "money"]);
assert.strictEqual(concert, "play time, play money");
console.log("done");
