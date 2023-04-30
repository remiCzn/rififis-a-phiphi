<template>
    <div class="etat">
        <h1>Etat Nourriture</h1>
    </div>
    <div class="etat">
        <h1>Etat Eau</h1>
    </div>
    <div class="etat">
        <h1>Radeaux</h1>
    </div>
</template>


<style scoped lang="scss">
@import '../assets/base.scss';
.etat {
    width: 33%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @include flex-column;
}
</style>