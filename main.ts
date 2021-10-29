function Level_Start () {
    if (Level == 1) {
        tiles.setTilemap(tilemap`level2`)
    }
    if (Level == 2) {
        tiles.setTilemap(tilemap`level3`)
    }
    if (Level == 3) {
        tiles.setTilemap(tilemap`level1`)
    }
    tiles.placeOnTile(Hero, tiles.getTileLocation(2, 13))
    scene.cameraFollowSprite(Hero)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hero.isHittingTile(CollisionDirection.Bottom)) {
        Hero.vy += -120
        wallJumpFromLeft = 1
        wallJumpFromRight = 1
    } else if (wallJumpFromRight == 1 && Hero.isHittingTile(CollisionDirection.Right) && !(Hero.isHittingTile(CollisionDirection.Bottom))) {
        Hero.vy += -120
        Hero.x += -20
        Hero.vx += -60
        wallJumpFromLeft = 1
        wallJumpFromRight = 0
    } else if (wallJumpFromLeft == 1 && Hero.isHittingTile(CollisionDirection.Left) && !(Hero.isHittingTile(CollisionDirection.Bottom))) {
        Hero.vy += -120
        Hero.x += 20
        Hero.vx += 60
        wallJumpFromLeft = 0
        wallJumpFromRight = 1
    }
    if (Long_Jump == 1) {
        Hero.vy += -60
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (Hero.isHittingTile(CollisionDirection.Bottom)) {
        Long_Jump = 1
    } else {
        Long_Jump = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Hero,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    Level += 1
    Level_Start()
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (Hero.isHittingTile(CollisionDirection.Bottom)) {
        Long_Jump = 1
    } else {
        Long_Jump = 0
    }
})
let wallJumpFromLeft = 0
let wallJumpFromRight = 0
let Level = 0
let Long_Jump = 0
let Hero: Sprite = null
Hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . . f e d d f 1 4 d 4 e e f . 
    . . . . f d d d e e e e e f . . 
    . . . . f e 4 e d d 4 f . . . . 
    . . . . f 2 2 e d d e f . . . . 
    . . . f f 5 5 f e e f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hero, 100, 0)
Hero.setFlag(SpriteFlag.ShowPhysics, true)
Long_Jump = 0
Level = 1
Level_Start()
game.onUpdate(function () {
    if (wallJumpFromLeft == 1 && !(Hero.isHittingTile(CollisionDirection.Bottom)) && Hero.isHittingTile(CollisionDirection.Left)) {
        Hero.vy = 0
        // 20 if you wanna more realisticd d
        Hero.ay = 0
    } else if (wallJumpFromRight == 1 && !(Hero.isHittingTile(CollisionDirection.Bottom)) && Hero.isHittingTile(CollisionDirection.Right)) {
        Hero.vy = 0
        Hero.ay = 0
    } else if (Hero.isHittingTile(CollisionDirection.Bottom)) {
        Hero.vx = 0
    } else {
        Hero.ay = 300
    }
    if (Hero.vx < 80 && Hero.vx > -80) {
        Long_Jump = 0
    }
})
