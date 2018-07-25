<template>
  <v-card style="width: 100%;">
    <v-card-title>
      <span class="pr-3">
        Transactions for {{ months[currentMonth].name }} - {{ currentYear }}
      </span>
      <v-btn flat icon class="pr-2" v-on:click="gotoMonth(-1)">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <v-btn flat icon class="pr-2" v-on:click="gotoCurrentMonth">
        <v-icon>today</v-icon>
      </v-btn>
      <v-btn flat icon v-on:click="gotoMonth(1)">
        <v-icon>keyboard_arrow_right</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
        v-bind:headers="headers"
        v-bind:items="items"
        v-bind:search="search"
        item-key="_id"
      >
      <template slot="items" slot-scope="props">
        <tr>
          <td>
            <v-edit-dialog
              lazy
            > {{ props.item.transactionDate }}
              <v-text-field
                slot="input"
                label="Edit"
                v-model="props.item.transactionDate"
                single-line
              ></v-text-field>
            </v-edit-dialog>
          </td>
          <td class="text-xs-left">{{ props.item.transactionType }}</td>
          <td class="text-xs-left" @click="props.expanded = !props.expanded">
            {{ props.item.description }}
          </td>
          <td class="text-xs-right">{{ props.item.charge }}</td>
          <td class="text-xs-right">{{ props.item.deposit }}</td>
          <td class="text-xs-right">{{ props.item.balance }}</td>
        </tr>
      </template>

      <template slot="expand" slot-scope="props">
        <v-card flat class="pl-5">
          <v-card-text class="text-xs-left">
            <v-text-field label="Note" v-model="props.item.notes"></v-text-field>
          </v-card-text>
        </v-card>
      </template>

      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>

    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      months: [
        { name: 'Zero', abrev: 'ZZZ', index: 0 },
        { name: 'January', abrev: 'Jan', index: 1 },
        { name: 'February', abrev: 'Feb', index: 2 },
        { name: 'March', abrev: 'Mar', index: 3 },
        { name: 'April', abrev: 'Apr', index: 4 },
        { name: 'May', abrev: 'May', index: 5 },
        { name: 'June', abrev: 'Jun', index: 6 },
        { name: 'July', abrev: 'Jul', index: 7 },
        { name: 'August', abrev: 'Aug', index: 8 },
        { name: 'September', abrev: 'Sep', index: 9 },
        { name: 'October', abrev: 'October', index: 10 },
        { name: 'November', abrev: 'Nov', index: 11 },
        { name: 'December', abrev: 'Dec', index: 12 }
      ],
      currentMonth: 5,
      currentYear: 2018,
      balanceCharges: 0,
      balanceDeposits: 0,
      max25chars: v => v.length <= 25 || 'Input too long!',
      search: '',
      pagination: {},
      headers: [
        { text: 'Date', align: 'center', sortable: false, value: 'date' },
        { text: 'Type', align: 'center', sortable: false, value: 'type' },
        {
          text: 'Description',
          align: 'center',
          sortable: false,
          value: 'description'
        },
        {
          text: 'Charge (-)',
          align: 'center',
          sortable: false,
          value: 'paymentAmt'
        },
        {
          text: 'Deposit (+)',
          align: 'center',
          sortable: false,
          value: 'depositAmt'
        },
        { text: 'Balance', align: 'center', sortable: false, value: 'balance' }
      ],
      items: [
        {
          _id: '5a8245999f63531c3ce288ba',
          userId: '5a777f0a75f64a1698221d98',
          transactionDate: 'May-14',
          transactionType: 'Opening Balance',
          description: 'Equity Line Initial Opening Balance',
          charge: 12378.0,
          deposit: 0.0,
          notes: ''
        },
        {
          _id: '5a8245999f63531c3ce288bb',
          userId: '5a777f0a75f64a1698221d98',
          transactionDate: 'May-15',
          transactionType: 'Credit Card',
          description: 'Amazon - Whey Protien',
          charge: 23.45,
          deposit: 0.0,
          notes: ''
        },
        {
          _id: '5a8245999f63531c3ce288bc',
          userId: '5a777f0a75f64a1698221d98',
          transactionDate: 'May-15',
          transactionType: 'Reward',
          description: 'New account first charge reward deposit',
          charge: 0.0,
          deposit: 100.0,
          notes: ''
        },
        {
          _id: '5a8245999f63531c3ce288bd',
          userId: '5a777f0a75f64a1698221d98',
          transactionDate: 'May-15',
          transactionType: 'Credit Card',
          description: 'Tex-mex lunch',
          charge: 12.33,
          deposit: 0.0,
          notes: ''
        },
        {
          _id: '5a8245999f63531c3ce288be',
          userId: '5a777f0a75f64a1698221d98',
          transactionDate: 'May-15',
          transactionType: 'Deposit',
          description: 'May 15 Payroll Deposit',
          charge: 0.0,
          deposit: 1000.0,
          notes: ''
        },
        {
          _id: '5a8245999f63531c3ce288bf',
          userId: '5a777f0a75f64a1698221d98',
          transactionDate: 'May-16',
          transactionType: 'Credit Card',
          description: 'Quick Trip - gas and car wash',
          charge: 38.12,
          deposit: 0.0,
          notes: 'Gas for the Acura. Got a car wash too.'
        },
        {
          _id: '5a8245999f63531c3ce288c0',
          userId: '5a777f0a75f64a1698221d98',
          transactionDate: 'May-16',
          transactionType: 'Credit Card',
          description: 'Optics World - Vortex Scope',
          charge: 833.0,
          deposit: 0.0,
          notes: 'My wife is going to kill me when she see this!'
        }
      ]
    };
  },
  methods: {
    getTransactionsByMonth: function() {},
    getPreviousMonthsBalances: function() {},
    mapTransaction: function(tx) {
      const me = this;
      const transDate = new Date(tx.transactionDate);
      let transaction = {
        transactionDate:
          me.months[transDate.getUTCMonth() + 1].abrev +
          '-' +
          transDate.getUTCDate(),
        transactionType: tx.transactionType,
        description: tx.description,
        charge: me.moneyFormatter(tx.charge),
        deposit: me.moneyFormatter(tx.deposit),
        balance: me.moneyFormatter(me.calcRunningBalance(tx))
      };
      return transaction;
    },
    moneyFormatter: function(amount) {
      let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
        // the default value for minimumFractionDigits depends on the currency
        // and is usually already 2
      });
      return formatter.format(amount);
    },
    calcRunningBalance: function(tx) {
      // any new charges?
      if (tx && tx.charge > 0) {
        this.balanceCharges += tx.charge;
      } else if (tx && tx.deposit > 0) {
        this.balanceDeposits += tx.deposit;
      }
      return this.balanceCharges - this.balanceDeposits;
    },
    gotoMonth: function(increment) {
      let newMonth = (this.currentMonth += increment);
      // Sanity checks now...
      if (newMonth > 12) {
        newMonth = 1;
        this.currentYear += 1;
      } else if (newMonth < 1) {
        newMonth = 12;
        this.currentYear -= 1;
      }

      this.currentMonth = newMonth;
      // Load selected month transaction data now...
      this.getPreviousMonthsBalances();
      this.getTransactionsByMonth();
    },
    gotoCurrentMonth: function() {
      let dt = new Date(Date.now());
      this.currentMonth = dt.getUTCMonth() + 1;
      this.currentYear = dt.getUTCFullYear();

      // Load selected month transaction data now...
      this.getPreviousMonthsBalances();
      this.getTransactionsByMonth();
    }
  },
  mounted: async function() {
    // const me = this
    await this.getPreviousMonthsBalances();
    await console.log(this.balanceCharges);
    await console.log(this.balanceDeposits);

    await this.getTransactionsByMonth();
  }
};
</script>

<style scoped>
.transactions {
  width: 100%;
}
</style>