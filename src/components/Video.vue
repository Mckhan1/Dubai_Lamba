<script setup></script>
<script>
export default {
    data() {
        return {
            play: false
        }
    },
    methods: {
        playVideo() {
            this.play = !this.play
            let video = document.querySelector('#firstScreenVideo')
            video.muted = !video.muted
        }
    },
};
</script>

<template>
    <div @click="playVideo" :class="{ videoTransformBefore: this.play }" class="videoCont w-[100%] flex relative items-center h-[100vh]">

        <video id="firstScreenVideo" class="absolute z-[-3]" loop muted autoplay
            src="../assets/INSANE FLAMES! Lamborghini Aventador LP720-4 Ft. Liberty Walk_Armytrix_Airrex_Forgiato.mp4"></video>


        <div class="videoText">
            <h3 :class="{ videoTransform: this.play }">Lamborghini Huracan</h3>
            <p :class="{ videoTransform: this.play }">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                laudantium iste mollitia necessitatibus
                eligendi similique!</p>
            <div class="flex items-center w-[150px]">

                <div 
                    class="playButton ">
                    <svg v-if="this.play == false" class="group hover:border-[#C80000] h-[90px] cursor-pointer"
                        viewBox="0 0 512 512">
                        <path height="20" class="fill-[gray]  group-hover:fill-[#C80000] duration-[.3s]"
                            d="M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z" />
                    </svg>

                    <svg v-if="this.play == true" class="group hover:border-[#C80000] h-[90px] cursor-pointer"
                        viewBox="0 0 512 512">
                        <title>Pause</title>
                        <path class="fill-[gray] group-hover:fill-[#C80000] duration-[.3s]" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="0" d="M186 150h16v220h-16zM310 150h16v220h-16z" />
                    </svg>

                </div>

            </div>
        </div>


    </div>
</template>



<style scoped>
.videoCont::before {
    content: '';
    height: 100%;
    width: 100%;
    z-index: -2;
    inset: -1;
    position: absolute;
    background: linear-gradient(180deg, rgba(22, 21, 22, 0.9) -7.87%, rgba(22, 21, 22, 0.6) 100%);
    left: 0;
    top: 0;
}

.videoTransform {
    transition-duration: .4s;
    opacity: 0;
}
.videoTransformBefore::before {
    transition-duration: .4s;
    opacity: 0;
}

#firstScreenVideo {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.playButton{
    border-radius: 50%;
    transition-duration: .3s;
    border: 3px solid rgb(173, 24, 24);
    margin-top: 50px;
}
.playButton:hover {
    box-shadow: 0px 0px 15px red, inset 0px 0px 15px red;
}

.videoText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 0px 0 0 60px;
}

h3 {
    color: rgb(126, 35, 1);
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
}
p {
    margin-top: 30px;
    color: rgb(126, 35, 1);
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    width: 50%;
}

</style>