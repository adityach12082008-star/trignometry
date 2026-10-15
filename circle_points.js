const r = require("raylib");

function setup() {
    const HEIGHT = 900;
    const WIDTH = 900;
    const RADIUS = 150;
    const points = 12;
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

function drawPoints(w, angle) {
    x = w.RADIUS * Math.cos(toRadian(angle)) + w.WIDTH / 2;
    y = w.RADIUS * Math.sin(toRadian(angle)) + w.WIDTH / 2;

    r.DrawCircle(x, y, 5, r.YELLOW);
}

function drawCircle(w) {
    r.DrawCircleLines(w.WIDTH / 2, w.HEIGHT / 2, w.RADIUS, r.WHITE);
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawCircle(w);
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