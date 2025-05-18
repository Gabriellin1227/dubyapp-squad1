<template>
    <div class="gestao-bancos">
        <Header />
        <Sidebar />
        <main>
            <div class="main-container">
                <CrudActions />
                <BankTable />
            </div>
        </main>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import CrudActions from '@/components/CrudActions.vue'
import BankTable from '@/components/BankTable.vue'
</script>

<style src="@/assets/style/gestaoBancos.css" />