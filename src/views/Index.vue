<template>
    <div>
        <h1>연합우주 픽크루 가족오락관</h1>
        <div>
            <h3>픽크루 가족오락관이란?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex amet iure culpa labore cupiditate. Facilis exercitationem atque nobis. Odit nesciunt, natus illo eveniet consectetur quibusdam dolor ullam culpa earum error?</p>
            <router-link to="/create-game">
                <v-btn>새 게임 생성하기</v-btn>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("으악, 저를 구현해 주세요! x_x");
    },
    beforeDestroy() {
        console.log("으악, 저를 버리고 가지 말아요!");
    },
    data: () => ({
        timedropdown: ['5분', '10분', '15분', '20분', '30분', '1시간', '2시간']
    })
}
</script>
