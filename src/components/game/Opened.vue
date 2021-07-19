<template>
    <div>
        <header>
            <h1>{{ username }} 님의 게임</h1>
            <p>{{ timecreated }} 생성됨</p>
        </header>
        <p id="status">게임이 진행되고 있어요!</p>
        <p>참가 신청 시간이 {{ timeleft }} 남았어요!</p>
        <p><a href="picrewlink">이 링크</a>의 픽크루 템플릿을 통해 당신의 개성을 표현해주세요!</p>
        <div id="thumbnail">
            <v-img src="thumbnailsrc"></v-img>
        </div>
        <v-form>
            <v-row>
                신청자님의 개성이 담긴 그림을 업로드해주세요!
            </v-row>
            <!--파일 드래그앤드롭-->
        </v-form>
    </div>
</template>