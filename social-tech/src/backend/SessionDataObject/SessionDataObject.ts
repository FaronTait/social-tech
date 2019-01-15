import {PlayerInfo} from '../SharedClasses/PlayerInfo';
import {Decision} from '../SharedClasses/Decision';

export class SessionDataObject {
    private m_playerInfo: PlayerInfo;
    private m_decisionList: Decision[] = [];

    addPlayerInfo(playerInfo: PlayerInfo): void {
        this.m_playerInfo = playerInfo;
    }

    addDecision(decision: Decision): void {
        this.m_decisionList.push(decision);
    }

    getDecisionList(): Decision[] {
        return (this.m_decisionList);
    }

    getJSON(): string {
        return (JSON.stringify(this));
    }
}
