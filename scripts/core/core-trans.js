var lib = require('core/lib');

const coreTrans = extend(CoreBlock, "core-trans", {
    canBreak(tile) { return Vars.state.teams.cores(tile.team()).size > 1; },
    canReplace(other) { return other.alwaysReplace; },
    canPlaceOn(tile, team) { return true; },
    placeBegan(tile, previous) {},
    beforePlaceBegan(tile, previous) {},

    drawPlace(x, y, rotation, valid) {},
});
lib.setBuildingSimple(coreTrans, CoreBlock.CoreBuild, {
    damage(damage) {  },
    handleDamage(tile, amount) { return 0; },
});
