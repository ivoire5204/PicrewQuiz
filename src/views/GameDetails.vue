<template>
    <div>
        <header>
            <h1>{{ username }}님의 게임</h1>
            <p>{{ timecreated }} 생성됨</p>
        </header>
        <p>{{ statusmsg }}</p>
        <p><a href="picrewlink">이 링크</a>의 픽크루 템플릿을 통해 당신의 개성을 표현해주세요!</p>
        <a href="picrewlink">
            <v-img id="thumbnail" v-bind:src="thumbnailsrc"></v-img>
        </a>
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
        username: "User@server.com",
        timecreated: "2021년 00월 00일 00:00",
        status: "opened",
        statusmsg: "참가 신청 시간이 {{ timeleft }} 남았어요!",
        timeleft: "00:00:00",
        picrewlink: "https://picrew.me/image_maker/614354",
        thumbnailsrc: "https://s3-ap-northeast-2.amazonaws.com/mastodon-planet-moe/cache/preview_cards/images/000/170/295/original/70bd094986a23b72.png",
    })
}
</script>

<style>
    #thumbnail {
        width: 300px;
        margin: 0px auto;
    }
</style>