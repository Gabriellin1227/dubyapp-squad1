<script setup></script>

<template>
    <div class="cards-container">
        <div class="total-card growth">
            <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                    <path fill="#f6f6f6" d="M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0z" stroke-width="25.5" stroke="#f6f6f6" />
                    <path fill="#f6f6f6" d="M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312z" stroke-width="25.5" stroke="#f6f6f6" />
                </svg>
            </div>
            <div class="total-content">
                <div class="total-title">Total vendido</div>
                <div class="total-info">R$ 1.632,00</div>
            </div>
        </div>
        <div class="total-card degrowth">
            <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                    <path fill="#f6f6f6" d="M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0z" stroke-width="25.5" stroke="#f6f6f6" />
                    <path fill="#f6f6f6" d="M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312z" stroke-width="25.5" stroke="#f6f6f6" />
                </svg>
            </div>
            <div class="total-content">
                <div class="total-title">Total recebido</div>
                <div class="total-info">R$ 1.600,00</div>
            </div>
        </div>
        <div class="total-card degrowth">
            <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                    <path fill="#f6f6f6" d="M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0z" stroke-width="25.5" stroke="#f6f6f6" />
                    <path fill="#f6f6f6" d="M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312z" stroke-width="25.5" stroke="#f6f6f6" />
                </svg>
            </div>
            <div class="total-content">
                <div class="total-title">Total divergente</div>
                <div class="total-info">R$ 12,00</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cards-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    width: 100%;

    .total-card {
        display: flex;
        justify-content: space-around;
        align-items: center;

        height: 88px;
        width: 100%;

        padding: 24px 32px;

        background-color: #FFFFFF;

        border-radius: 10px;
        box-shadow: 0 4px 4px rgba(00, 00, 00, 0.25);

        cursor: pointer;

        .card-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            
            height: 40px;
            width: 40px;

            border-radius: 8px;
        }

        .total-content {
            display: flex;
            flex-direction: column;

            height: 40px;
            width: 104px;

            .total-title {
                color: rgba(18, 40, 64, 0.8);
                font-size: 12px;
            }

            .total-info {
                font-size: 16px;
                font-weight: 600;
            }
        }
    }

    .growth {
        .card-icon {
            background-color: #73BA60;

            svg {
                transform: rotate(90deg);
            }
        }

        .total-content .total-info {
            color: #73BA60;
        }
    }

    .degrowth {
        .card-icon {
            background-color: #D43343;

            svg {
                transform: rotate(-90deg);
            }
        }

        .total-content .total-info {
            color: #D43343;
        }
    }
}
</style>