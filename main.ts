scene.onOverlapTile(SpriteKind.Enemy, assets.tile`acid`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`spikes-up`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`empty cave`, function (sprite, location) {
    info.changeScoreBy(1)
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`spikes`, function (sprite, location) {
    game.over(false)
})
let mySprite: Sprite = null
info.setScore(info.highScore())
tiles.setTilemap(tilemap`level10`)
scene.setBackgroundImage(assets.image`background`)
mySprite = sprites.create(assets.image`truck3`, SpriteKind.Enemy)
mySprite.ay = 500
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
animation.runImageAnimation(
mySprite,
assets.animation`truck3 animated`,
100,
true
)
forever(function () {
    mySprite.ay = 500
})
