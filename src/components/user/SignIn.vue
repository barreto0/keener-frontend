<template>
    <div class="container">
        <div class="formCard">
            <h4 style="text-align: center; margin-top: 25px;">Processo seletivo keener.io</h4>
            <div style="padding: 30px; text-align: left;">
                <b-form>
                    <b-form-group>
                        <label style="align-self: left;" for="input-email">Email</label>
                        <b-form-input
                        id="input-email"
                        type="email"
                        placeholder="Insira seu email"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        placeholder="Enter name"
                        required
                        ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  min-height: 100vh;
}
.formCard {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  height: 500px;
  width: 90%;
  max-width: 400px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
}
</style>