<template>
  <div>
    <div class="heard">
      <van-nav-bar
        title="面试邀请"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>

    <van-form @submit="onSubmit">
      <van-field
        clickable
        type="datetime"
        name="datetimePicker"
        :value="value"
        label="时间选择"
        placeholder="点击选择时间"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="datetime"
          v-model="currentDate"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
        v-model="interviewSite"
        name="面试地点"
        label="面试地点"
        placeholder="面试地点"
        :rules="[{ required: true, message: '请填写面试地点' }]"
      />
      <van-field
        v-model="interviewContactName"
        name="联系人姓名"
        label="联系人姓名"
        placeholder="联系人姓名"
        :rules="[{ required: true, message: '请填写联系人姓名' }]"
      />
      <van-field
        v-model="interviewTelephone"
        name="联系人电话"
        label="联系人电话"
        placeholder="联系人电话"
        :rules="[{ required: true, message: '请填写联系人电话' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <my-bottom></my-bottom>
  </div>

</template>

<script>
  import axios from 'axios'
  import {Toast} from 'vant';
  export default {
    data() {
      return {
//        interviewDate: '',
        interviewSite: '',
        interviewContactName: '',
        interviewTelephone: '',
        currentDate: new Date(),
        value: '',
        showPicker: false,
      };
    },
    methods: {
      onClickLeft() {

      },
      onSubmit(values) {
        console.log('submit', values);
        alert(this.interviewDate)
        alert(this.interviewSite)
        alert(this.interviewContactName)
        alert(this.interviewTelephone)
        axios.post("http://localhost/saveInterview", {
          currentUserId: 1,
          interviewUserId: 2,
          interviewDate: this.value,
          interviewSite: this.interviewSite,
          interviewContactName: this.interviewContactName,
          interviewTelephone: this.interviewTelephone,
        }).then(res => {
          if (res.data === "success") {
            Toast.success('提交成功');
          }
          if (res.data === "failed") {
            Toast.fail('提交失败');
          }
        })
      },
      onConfirm(time) {
//        this.interviewDate = time.toString().substring(0, 33);
        axios.get("http://localhost/formatDate/" + time.toString().substring(0, 33)).then(res => {
          this.value = res.data
        })
        this.showPicker = false;
      },
    },
  }
</script>

<style scoped>
  .heard {
    background-color: white;
    width: 100%;
    position: absolute;
    top: 0px;
  }
</style>
