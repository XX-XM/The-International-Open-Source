import './creepClasses'

import './creepFunctions'

import { sourceHarvesterManager } from './roleManagers/sourceHarvesterManager'
import { haulerManager } from './roleManagers/haulerManager'
import { mineralHarvesterManager } from './roleManagers/mineralHarvesterManager'

export function roleManager(room: Room) {

    const managers: {[key: string]: Function} = {
        sourceHarvester: sourceHarvesterManager,
        hauler: haulerManager,
    }

    let role: string
    for (role in managers) {

        const manager = managers[role]

        // Iterate if there are no creeps of manager's role

        if (room.myCreeps[role].length == 0) continue

        // Run manager

        manager(room, room.myCreeps[role])
    }
}
