<template>
    <div>
        <header>
            <h1>{{ username }}님의 게임</h1>
            <p>{{ timecreated }} 생성됨</p>
        </header>
        <p>{{ statusmsg }}</p>
        <p><a v-bind:href="picrewlink">이 링크</a>의 픽크루 템플릿을 통해 당신의 개성을 표현해주세요!</p>
        <a v-bind:href="picrewlink">
            <v-img id="thumbnail" v-bind:src="thumbnailsrc"></v-img>
        </a>
        <v-form>
            <v-row>
                당신의 개성이 담긴 그림을 업로드해주세요!
            </v-row>
            <v-row>
                <!--드래그 앤 드롭 방식 적용 예정-->
                <v-file-input></v-file-input>
            </v-row>
            <v-row>
                <v-btn>제출하기</v-btn>
            </v-row>
        </v-form>
        <!--게임 제안자에게 보이는 메시지-->
        <p>신청을 미리 끝내고 게임을 진행할까요?</p>
        <v-btn>미리 끝내기</v-btn>
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
        margin: 20px auto;
    }
    .v-file-input {
        width: 50px;
    }
</style>