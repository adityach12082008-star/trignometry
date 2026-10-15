const r = require("raylib");

function setup() {
    const HEIGHT = 900;
    const WIDTH = 900;
    const RADIUSX = 200;
    const RADIUSY = 100;
    const angleGap = 0.1;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(HEIGHT, WIDTH, "circle_points");
    r.SetTargetFPS(60);

    const w = { HEIGHT, WIDTH, RADIUSX, RADIUSY, angleGap };
    return w;
}

function toRadian(angle) {
    return angle * Math.PI / 180;
}

function drawEllipse(w, angle) {
    x = w.RADIUSX * Math.cos(toRadian(angle)) + w.WIDTH / 2;
    y = w.RADIUSY * Math.sin(toRadian(angle)) + w.WIDTH / 2;

    r.DrawCircle(x, y, 2, r.WHITE);
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    for (let i = 0; i <= 360; i += w.angleGap) {
        drawEllipse(w, i);
    }

    r.EndDrawing();
}

function loop(w) {
    while (!r.WindowShouldClose()) {
        // no update!
        draw(w);
    }
}

function main() {
    const w = setup();
    loop(w);
}
main();