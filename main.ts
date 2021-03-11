scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dog.vy == 0) {
        dog.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true, effects.confetti)
})
let dog: Sprite = null
scene.setBackgroundColor(10)
dog = sprites.create(img`
    . . . . 4 4 4 . . . . 4 4 4 . . 
    . . . 4 5 5 5 e . . e 5 5 5 4 . 
    . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
    . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
    . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
    . . . e e 5 5 5 5 5 5 5 5 e e . 
    . . . . e 5 f 5 5 5 5 f 5 e . . 
    f f . . f 5 5 5 4 4 5 5 5 f . . 
    f 5 f . f 6 5 5 f f 5 5 4 f . . 
    f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
    . f 5 4 4 5 5 5 5 5 5 4 f . . . 
    . . f f 5 5 4 5 5 5 5 5 f . . . 
    . . . f 5 f f 5 f f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(dog)
controller.moveSprite(dog, 100, 0)
tiles.setTilemap(tilemap`level1`)
dog.ay = 200
