<template>
    <div>
        <header>
            <h1>{{ username }}님의 게임</h1>
            <p>{{ timecreated }} 생성됨</p>
        </header>
        <article>
            <span v-if="status === 'opened'">
                <Opened></Opened>
            </span>
            <span v-if="status === 'playing'">
                <Playing></Playing>
            </span>
            <span v-if="status === 'closed'">
                <Closed></Closed>
            </span>
        </article>
    </div>
</template>

<script> 
import Opened from '../components/game/Opened.vue'
import Playing from '../components/game/Playing.vue'
import Closed from '../components/game/Closed.vue'

export default {
    components: {
        Opened, Playing, Closed
    },
    data: () => ({
        // 서버에서 status 값 가져오기
        status: 'closed',
        username: "User@server.com",
        timecreated: "2021년 00월 00일 00:00",
    })
}
</script>

<style>
h1 {
    margin-bottom: 10px;
}
header {
    margin-bottom: 50px;
}
header > p, article {
    margin-left: 30px;
}
</style>