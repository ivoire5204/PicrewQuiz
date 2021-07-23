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
        timeleft: "00:00:00",
        picrewlink: "https://picrew.me/image_maker/614354",
        thumbnailsrc: "https://s3-ap-northeast-2.amazonaws.com/mastodon-planet-moe/cache/preview_cards/images/000/170/295/original/70bd094986a23b72.png",
    })
}
</script>

<!--가져온 vue 파일에 포함된 바인딩 태그가 표시되지 않는 오류-->