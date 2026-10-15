const r = require("raylib");

function setup() {

    const HEIGHT = 400;
    const WIDTH = 600;
    const ORIGINX = 50;
    const ORIGINY = 200;
    const AMPLITUDE = 100;
    const REVOLUTION = 410;


    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "waves");
    r.SetTargetFPS(60);

    const w = { HEIGHT, WIDTH, ORIGINX, ORIGINY, AMPLITUDE, REVOLUTION };
    return w;
}

function bounds(w) {
    const ly1 = w.HEIGHT / 2 + w.AMPLITUDE;
    const ly2 = w.HEIGHT / 2 + w.AMPLITUDE;
    const ul1 = w.HEIGHT / 2 - w.AMPLITUDE;
    const ul2 = w.HEIGHT / 2 - w.AMPLITUDE;

    //Upper Bounds , Lower Bounds
    r.DrawLine(w.ORIGINX, ly1, w.WIDTH, ly2, r.GRAY);
    r.DrawLine(w.ORIGINX, ul1, w.WIDTH, ul2, r.GRAY);

    //Graph
    r.DrawLine(w.ORIGINX, 0, w.ORIGINX, w.HEIGHT, r.GRAY);
    r.DrawLine(w.ORIGINX, w.HEIGHT / 2, w.WIDTH, w.HEIGHT / 2, r.GRAY);
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function drawSineWave(w) {
    for (let x = w.ORIGINX; x < w.REVOLUTION; x++) {
        const y = - Math.sin(toRadians(x - w.ORIGINX)) * w.AMPLITUDE + w.ORIGINY;

        r.DrawCircle(x, y, 1, r.RED);
    }
}

function drawCosWave(w) {
    for (let x = w.ORIGINX; x < w.REVOLUTION; x++) {
        const y = - Math.cos(toRadians(x - w.ORIGINX)) * w.AMPLITUDE + w.ORIGINY;

        r.DrawCircle(x, y, 1, r.YELLOW);
    }
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    bounds(w);
    drawSineWave(w);
    drawCosWave(w);

    r.EndDrawing();
}

function update(w) { }

function loop(w) {
    while (!r.WindowShouldClose()) {
        draw(w);
    }
}

function main() {
    const w = setup();
    loop(w);
}

main();