<template>
    <div class="action">
        <button>Chercher nourriture</button>
    </div>
    <div class="action">
        <button>Chercher eau</button>
    </div>
    <div class="action">
        <button>Chercher bois</button>
    </div>
</template>


<style scoped lang="scss">
@import '../assets/base.scss';
.action {
    width: 33%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @include flex-column;
}
</style>

