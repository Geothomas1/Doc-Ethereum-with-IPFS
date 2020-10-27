const ihash = artifacts.require("ihash");

require('chai')
  .use(require('chai-as-promised'))
  .should()
  
  // eslint-disable-next-line no-undef
  contract('ihash',(accouts)=>{
      let iihash
      before( async() =>{
        iihash= await ihash.deployed()


      })

      describe('deployment', async() =>
      {
          it('deployes successfully', async()=>{

          const address=iihash.address
          assert.notEqual(address,0X0)
          assert.notEqual(address,'')
          assert.notEqual(address,null)
          assert.notEqual(address,undefined)
          })
      })
      describe('storage', async()=>{
          it('update the hashvalue',async()=>
          {
            let ihashset
            ihashset='abc123'
            await iihash.set(ihashset)
            const result= await iihash.get()
            assert.equal(result,ihashset)
          })


      })
  })