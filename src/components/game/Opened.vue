<template>
    <div>
        <p id="timeleft">참가 신청 시간이 {{ timeleft }} 남았어요!</p>
        <p><a v-bind:href="picrewlink">이 링크</a>의 픽크루 템플릿을 통해 당신의 개성을 표현해주세요!</p>
        <p>
            <a v-bind:href="picrewlink">
            <img id="thumbnail" v-bind:src="thumbnailsrc">
        </a> <!--이미지 바인딩 안 됨 오류-->

        </p>
        <v-form>
            <v-row>
                당신의 개성이 담긴 그림을 업로드해주세요!
            </v-row>
            <v-row id="inputcontainer">
                <!--드래그 앤 드롭 방식 적용 예정-->
                <v-file-input></v-file-input>
            </v-row>
            <v-row>
                <v-btn>제출하기</v-btn>
            </v-row>
        </v-form>
        <!--게임 제안자에게 보이는 메시지-->
        <p>신청이 끝나면 진행자님의 계정으로 게임 시작을 알리는 게시글이 자동 작성됩니다!<br>
        이 게임은 아직 참가 신청을 받고 있어요! 신청을 미리 끝내고 게임을 진행할까요?</p>
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
        timeleft: "00:00:00",
        picrewlink: "https://picrew.me/image_maker/614354",
        thumbnailsrc: "https://cdn.picrew.me/app/image_maker/947708/icon_PiRTf3Af16vdKlKs.png",
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
    #timeleft {
    color: green;
    font-weight: bold;
    margin-bottom: 0px;
    }
    .row {
        margin-left: 0px;
    }
    #inputcontainer {
        width: 300px;
    }
    .v-form {
        margin-bottom: 50px;
    }
</style>