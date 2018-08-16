class Sprite {
    constructor(spriteSheet, frameWidth, frameHeight, x = 0, y = 0, speed = 1) {
        this.spriteSheet = spriteSheet;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.x = x;
        this.y = y;
        this.speed = speed;

        this.width = spriteSheet.width;
        this.height = spriteSheet.height;
        this.columns = Math.floor(this.width / this.frameWidth);
        this.rows = Math.floor(this.height / this.frameHeight);

        this.index = 0;
        this.frames = this.getFramesArray();
    }

    getFramesArray() {
        let arr = [];
        console.log(this.spriteSheet);
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.columns; j++) {
                arr.push({
                    x: j * this.frameWidth,
                    y: i * this.frameHeight
                });
            }
        }

        return arr;
    }

    render(frameNo) {
        if(this.frames.length === 0 || isNaN(frameNo))
            return;

        image(this.spriteSheet, this.x, this.y, // img,[sx=0],[sy=0]
            this.frameWidth, this.frameHeight, // [sWidth=img.width],[sHeight=img.height]
            this.frames[frameNo].x, this.frames[frameNo].y, // [dx=0],[dy=0]
            this.frameWidth, this.frameHeight); // [dWidth],[dHeight]
    }

    animate() {
        let index = Math.floor(this.index) % this.frames.length;
        image(this.spriteSheet, this.x, this.y, // img,[sx=0],[sy=0]
            this.frameWidth, this.frameHeight, // [sWidth=img.width],[sHeight=img.height]
            this.frames[index].x, this.frames[index].y, // [dx=0],[dy=0]
            this.frameWidth, this.frameHeight); // [dWidth],[dHeight]
        this.index += this.speed;

        // move
        this.x += this.speed * 5;
        if(this.x >= width + this.frameWidth)
            this.x = -this.frameWidth;
    }
}