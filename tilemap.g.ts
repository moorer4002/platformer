// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`32000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040005000000000000000000000000000000000000000000000000000405000000000000000000000000000000000000010101010100000000000000050000000000000000000000000000000101010101000000030000000000000000000000000000000000000000000001010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010000000000000001010100000000000000000000000000000001010101010000000000000000000000000000000005000000000000040000000000000000000000000000000000040005000000000000000000000000000000000000000101010100000000010101010100000000000600000000000000010101010100000000000000000000000000000000040000000000000000000000000000000000000001010101010101010000000000000000000000000000000000000000000101010000000000000000000000000000000000000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
..................................................
..................................................
.............22222.......................22222....
......................22222.......................
.....................................222.......222
...............22222..............................
.................................2222....22222....
.........22222....................................
22222222.....................222..................
22222222..........................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile":
            case "tile1":return tile1;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
