<template>
    <div>
        <p>게임이 진행되고 있어요!</p>
        <p>다음 연합우주원 분들이 게임에 참여했어요! 누가 만든 그림인지 한 번 맞춰볼까요?</p>
        <v-form>
            <v-row>
                <ul>
                    <li v-for="applier in appliers" v-bind:key="applier">
                        {{ applier }}
                        <v-text-field class="answer"></v-text-field>
                    </li>
                </ul>
            </v-row>
            <v-row>
                <v-btn class="arrowbtn" elevation="0" fab>&#60;</v-btn>
                <div class="gamecontent">
                <!--v-for 사용-->
                    <v-img class="thumbnail" v-bind:src="gamecontent.thumbnailsrc"></v-img>
                    <span>{{ gamecontent.number }}</span> <!--번호-->
                </div>
                <v-btn class="arrowbtn" elevation="0" fab>&#62;</v-btn>
            </v-row>
            <v-row>
                <router-link to="/"><v-btn elevation="2">제출하기</v-btn></router-link>
            </v-row>
        </v-form>
    </div>
</template>

<script> 
export default {
    data: () => ({
        // 서버에서 status 값 가져오기
        status: 'playing',
        username: "User@server.com",
        appliers: [
            "Ann@server.com",
            "Bob@server.com",
            "Charlie@server.com"
        ],
        timecreated: "2021년 00월 00일 00:00",
        timeleft: "00:00:00",
        picrewlink: "https://picrew.me/image_maker/614354",
        thumbnailsrc: "https://s3-ap-northeast-2.amazonaws.com/mastodon-planet-moe/cache/preview_cards/images/000/170/295/original/70bd094986a23b72.png",
    })
}
</script>

<style>
    .answer {
        width: 10px;
    }
</style>