#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("7qpRXNFY5PJQfwptK4BosJ5jCnVeEYRWATFu8BBDTVcr");
// creater caimpaign
// user participate in campaign
// user can claim reward
// updated its points from reclaim protocol

#[program]
pub mod dashh {
    use super::*;

    pub fn create_campaign(ctx: Context<CreateCampaign>,campaignid:u64, title: String,image:String, description: String, lable:String,endtime:u64, reward: u64) -> Result<()> {
        let campaign = &mut ctx.accounts.campaign;
        campaign.owner = ctx.accounts.signer.key();
        campaign.id = campaignid;
        campaign.title = title;
        campaign.image = image;
        campaign.description = description;
        campaign.lable = lable;
        campaign.endtime= endtime;
        campaign.reward = reward;
        Ok(())
    }
    pub fn create_participent(ctx: Context<CreateParticipent>,campaignid:u64,_useraccount:Pubkey ) -> Result<()> {
        let participent = &mut ctx.accounts.participent;
        participent.id= campaignid;
        participent.user = ctx.accounts.signer.key();
        participent.points = 0;
        Ok(())
    }
    pub fn updated_participent(ctx: Context<UpdateParticipent>,_campaignid:u64,_useraccount:Pubkey , points:u64) -> Result<()> {
        let participent = &mut ctx.accounts.participent;
        participent.points = points;
        Ok(())
    }

}

#[account]
#[derive(InitSpace)]
pub struct Campaign {
  pub id: u64,
  #[max_len(200)]
    pub title: String,
    #[max_len(1000)]
    pub image: String,
    #[max_len(1000)]
    pub description: String,
    #[max_len(50)]
    pub lable: String,
    pub endtime: u64,
    pub reward: u64,
    pub owner: Pubkey,

}

#[derive(Accounts)]
#[instruction(campaignid:u64)]
pub struct CreateCampaign<'info> {
  #[account(mut)]
  pub signer: Signer<'info>,
    #[account(
      init, 
      payer = signer,
       space = 8 +Campaign::INIT_SPACE,
        seeds = [campaignid.to_le_bytes().as_ref()],
        bump,
    )]
    pub campaign: Account<'info, Campaign>,
    pub system_program: Program<'info, System>,
}


#[account]
#[derive(InitSpace)]
pub struct Participent{
  pub id: u64,
  pub user: Pubkey,
  pub points: u64,
}

#[derive(Accounts)]
#[instruction(campaignid:u64, useraccount:Pubkey)]
pub struct CreateParticipent<'info> {
  #[account(mut)]
  pub signer: Signer<'info>,
    #[account(
      init, 
      payer = signer,
      space = 8 +Participent::INIT_SPACE,
      seeds = [campaignid.to_le_bytes().as_ref(),useraccount.key().as_ref()],
      bump,
    )]
    pub participent: Account<'info, Participent>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(campaignid:u64, useraccount:Pubkey)]
pub struct UpdateParticipent<'info> {
  #[account(mut)]
  pub signer: Signer<'info>,
    #[account(mut,
      seeds = [campaignid.to_le_bytes().as_ref(),useraccount.key().as_ref()],
      bump,
      realloc = 8 + Participent::INIT_SPACE,
        realloc::payer = signer, 
        realloc::zero = true, 
    )]
    pub participent: Account<'info, Participent>,
    pub system_program: Program<'info, System>,
}





