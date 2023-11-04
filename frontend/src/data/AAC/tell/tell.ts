import { TileAssets } from "@/components/AAC/TileTypes";
import materials from "../materials/materials";
import tools from "../tools/tools";
import because from "@/data/AAC/because/because";
import { BECAUSE_TILES_COLOR } from "@/data/AAC/because/because";
import sound from "@/data/AAC/sound/sound";
import { SOUND_TILES_COLOR } from "@/data/AAC/sound/sound";
import okay from "@/data/AAC/okay/okay";
import { OKAY_TILES_COLOR } from "@/data/AAC/okay/okay";
import learn, { LEARN_TILES_COLOR } from "../learn/learn";

export const TELL_TILES_COLOR = "blue";

const tell: TileAssets = {
    tell: {
        image: "/AAC_assets/img/tell/tell.png",
        text: "Tell",
        sound: "Tell",
        tileColor: TELL_TILES_COLOR,
    },
    yes: {
        image: "/AAC_assets/img/tell/yes.png",
        text: "Yes",
        sound: "Yes",
        tileColor: "green",
    },
    learn: {
        image: "/AAC_assets/img/tell/learn.png",
        text: "Learn",
        sound: "Learn",
        tileColor: LEARN_TILES_COLOR,
        subTiles: learn,
    },
    okay: {
        image: "/AAC_assets/img/tell/okay.png",
        text: "Okay",
        sound: "Okay",
        tileColor: OKAY_TILES_COLOR,
        subTiles: okay,
    },
    sound: {
        image: "/AAC_assets/img/tell/sound.png",
        text: "Sound",
        sound: "Sound",
        tileColor: SOUND_TILES_COLOR,
        subTiles: sound,
    },
    sorry: {
        image: "/AAC_assets/img/tell/sorry.png",
        text: "Sorry",
        sound: "Sorry",
        tileColor: "yellow",
    },
    ask: {
        image: "/AAC_assets/img/tell/ask.png",
        text: "Ask",
        sound: "Ask",
        tileColor: TELL_TILES_COLOR,
    },
    write: {
        image: "/AAC_assets/img/tell/write.png",
        text: "Write",
        sound: "Write",
        tileColor: TELL_TILES_COLOR,
    },
    call: {
        image: "/AAC_assets/img/tell/call.png",
        text: "Call",
        sound: "Call",
        tileColor: TELL_TILES_COLOR,
    },
    no: {
        image: "/AAC_assets/img/tell/no.png",
        text: "No",
        sound: "No",
        tileColor: "red",
    },
    talk: {
        image: "/AAC_assets/img/tell/talk.png",
        text: "Talk",
        sound: "Talk",
        tileColor: TELL_TILES_COLOR,
    },
    speak: {
        image: "/AAC_assets/img/tell/speak.png",
        text: "Speak",
        sound: "Speak",
        tileColor: TELL_TILES_COLOR,
    },
    say: {
        image: "/AAC_assets/img/tell/say.png",
        text: "Say",
        sound: "Say",
        tileColor: TELL_TILES_COLOR,
    },
    guess: {
        image: "/AAC_assets/img/tell/guess.png",
        text: "Guess",
        sound: "Guess",
        tileColor: TELL_TILES_COLOR,
    },
    hello: {
        image: "/AAC_assets/img/tell/hello.png",
        text: "Hello",
        sound: "Hello",
        tileColor: "yellow",
    },
    listen: {
        image: "/AAC_assets/img/tell/listen.png",
        text: "Listen",
        sound: "Listen",
        tileColor: TELL_TILES_COLOR,
    },
    hear: {
        image: "/AAC_assets/img/tell/hear.png",
        text: "Hear",
        sound: "Hear",
        tileColor: TELL_TILES_COLOR,
    },
    because: {
        image: "/AAC_assets/img/tell/because.png",
        text: "Because",
        sound: "Because",
        tileColor: BECAUSE_TILES_COLOR,
        subTiles: because,
    },
    goodbye: {
        image: "/AAC_assets/img/tell/goodbye.png",
        text: "Goodbye",
        sound: "Goodbye",
        tileColor: "yellow",
    },
    please: {
        image: "/AAC_assets/img/tell/please.png",
        text: "Please",
        sound: "Please",
        tileColor: "yellow",
    },
    thankyou: {
        image: "/AAC_assets/img/tell/thankyou.png",
        text: "Thank You",
        sound: "Thank You",
        tileColor: "yellow",
    },
    myturn: {
        image: "/AAC_assets/img/tell/myturn.png",
        text: "My Turn",
        sound: "My turn",
        tileColor: "yellow",
    },
    yourturn: {
        image: "/AAC_assets/img/tell/yourTurn.png",
        text: "Your Turn",
        sound: "Your turn",
        tileColor: "yellow",
    },
    think: {
        image: "/AAC_assets/img/tell/think.png",
        text: "Think",
        sound: "Think",
        tileColor: TELL_TILES_COLOR,
    },
    remember: {
        image: "/AAC_assets/img/tell/remember.png",
        text: "Remember",
        sound: "Remember",
        tileColor: TELL_TILES_COLOR,
    }
};

export default tell;
