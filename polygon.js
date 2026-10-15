const r = require("raylib");

function setup() {
    const WIDTH = 900;
    const HEIGHT = 900;
    const RADIUS = 150;
    const points = 7;
    const angleGap = 360 / points;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(HEIGHT, WIDTH, "circle_points");
    r.SetTargetFPS(60);

    const w = { HEIGHT, WIDTH, RADIUS, points, angleGap };
    return w;
}

function toRadian(angle) {
    return angle * Math.PI / 180;
}

function linePoints(w, angle) {
    return {
        x: w.RADIUS * Math.cos(toRadian(angle)) + w.WIDTH / 2,
        y: w.RADIUS * Math.sin(toRadian(angle)) + w.WIDTH / 2,
    };
}

function drawPoints(w, angle) {
    r.DrawLineEx(linePoints(w, angle), linePoints(w, angle + w.angleGap), 2, r.WHITE);
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    for (let i = 0; i <= 360; i += w.angleGap) {
        drawPoints(w, i);
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