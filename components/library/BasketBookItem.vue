<template>
  <div>
    <div class="book-card">
      <div class="book-body">
        <div class="book-head flex items-center justify-between">
          <div class="flex items-center">
            <div>
              <img
                class="book-img"
                src="~/assets/images/library/book-img.png"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <span class="book-title">{{ item.name }}</span>
              <span class="book-author">نویسنده: {{ item.author }}</span>
            </div>
          </div>
          <div>
            <span class="delete-basket-item flex items-center">
              <span @click="$emit('delete')" class="material-symbols-outlined delete-icon">
                delete
              </span>
            </span>
          </div>
        </div>
        <div class="book-footer flex items-center justify-between">
          <div>
            <span class="book-begha-info flex items-center">
              <span class="icon-Mosque-Iran begha-icon"></span>
              <span class="begha-name">امام زاده صالح (ع)</span>
            </span>
          </div>
          <div>
            <span v-if="item.finished" class="border border-error-700 rounded-3xl bg-error-100 p-1 text-error-700 gap-1 flex justify-center items-center">

              <div class="p-1 rounded-full bg-error-200">

                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path opacity="0.4" d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1Z" fill="#DB2929"/>
                  <path d="M6.52969 6.00018L7.67969 4.85018C7.82469 4.70518 7.82469 4.46518 7.67969 4.32018C7.53469 4.17518 7.29469 4.17518 7.14969 4.32018L5.99969 5.47018L4.84969 4.32018C4.70469 4.17518 4.46469 4.17518 4.31969 4.32018C4.17469 4.46518 4.17469 4.70518 4.31969 4.85018L5.46969 6.00018L4.31969 7.15018C4.17469 7.29518 4.17469 7.53518 4.31969 7.68018C4.39469 7.75518 4.48969 7.79018 4.58469 7.79018C4.67969 7.79018 4.77469 7.75518 4.84969 7.68018L5.99969 6.53018L7.14969 7.68018C7.22469 7.75518 7.31969 7.79018 7.41469 7.79018C7.50969 7.79018 7.60469 7.75518 7.67969 7.68018C7.82469 7.53518 7.82469 7.29518 7.67969 7.15018L6.52969 6.00018Z" fill="#DB2929"/>
                </svg>

              </div>

              <span class="status-text"> نا موجود</span>

            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props=defineProps(['item'])

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.book-card {
  margin-bottom: 16px;
  box-shadow: 3px 4px 19px 0px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  border: 1px solid $outline-variant;
  .book-body {
    padding: 16px 12px;
    .book-head {
      padding-bottom: 12px;
      margin-bottom: 12px;
      border-bottom: 1px solid $outline-variant;
      .stock-status {
        padding: 8px;
        height: 28px;
        border-radius: 24px;
        border: 1px solid $primary;
        background-color: #eefef6;
        .status-text {
          color: $primary;
          font-family: "yekan-regular";
          font-size: 12px;
          font-weight: 400;
        }
        .check-icon {
          font-size: 18px;
          color: $primary;
          margin-left: 4px;
        }
      }
      .delete-basket-item {
        span {
          color: $error;
        }
      }
      .book-img {
        width: 57px;
        height: 57px;
        border-radius: 8px;
        margin-left: 8px;
      }
      .book-title {
        color: $surface-on;
        font-family: "yekan-regular";
        font-size: 14px;
        font-weight: 400;
      }
      .book-author {
        color: $surface-on;
        font-family: "yekan-regular";
        font-size: 12px;
        font-weight: 400;
        margin-top: 8px;
      }
    }
    .book-footer {
      .stock-status {
        padding: 8px;
        height: 28px;
        border-radius: 24px;
        border: 1px solid $primary;
        background-color: #eefef6;
        .status-text {
          color: $primary;
          font-family: "yekan-regular";
          font-size: 12px;
          font-weight: 400;
        }
        .check-icon {
          font-size: 18px;
          color: $primary;
          margin-left: 4px;
        }
      }
      .book-begha-info {
        padding: 4px 10px;
        border-radius: 8px;
        background-color: $secondary-container;
        .begha-icon {
          color: $secondary;
          margin-left: 4px;
          font-size: 22px;
          margin-bottom: 6px;
        }
        .begha-name {
          color: $secondary-on-container;
          font-family: "yekan-regular";
          font-size: 11px;
          font-weight: 400;
        }
      }
      .book-genre-info {
        .book-genre {
          color: $surface-on;
          font-family: "yekan-regular";
          font-size: 11px;
          font-weight: 400;
        }
        .book-genre-icon {
          margin-left: 4px;
          width: 24px;
          height: 24px;
          background-color: #e5f0fb;
          border-radius: 50%;
          span {
            font-size: 15px;
            color: $secondary;
          }
        }
      }
    }
  }
}
</style>
